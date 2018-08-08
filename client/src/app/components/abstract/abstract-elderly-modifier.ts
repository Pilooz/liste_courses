import { ElderlyClass } from "../../domain/elderly.class";
import { ElderlyService } from "../../services/elderly.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";

export abstract class AbstractElderlyModifier implements Deactivable {

    public elderly: ElderlyClass;
    public elderlyForm: FormGroup;
    public standalone: boolean;

    constructor(protected elderlyService: ElderlyService,
        protected route: ActivatedRoute) {
        this.elderly = this.route.snapshot.data['elderly'] || new ElderlyClass();
        this.standalone = this.route.snapshot.queryParamMap.get('standalone') === 'true';
    }

    /**
     * Disable leaving the page if not saved
     */
    public canDeactivate() {
        return !this.elderlyForm || this.elderlyForm.pristine;
    }

    protected save(onCreated: Function = () => { }, onUpdated?: Function) {
        if (!onUpdated) {
            onUpdated = onCreated;
        }
        if (!this.elderly.id) {
            this.elderlyService.create(this.elderly).subscribe((elderly) => {
                if (this.elderlyForm) {
                    this.elderlyForm.markAsPristine();
                }
                Object.assign(this.elderly, elderly);
                onCreated()
            });
        } else {
            this.elderlyService.update(this.elderly).subscribe((elderly) => {
                if (this.elderlyForm) {
                    this.elderlyForm.markAsPristine();
                }
                Object.assign(this.elderly, elderly, {
                    skills: this.elderly.skills
                });
                onUpdated()
            });
        }
    }
}