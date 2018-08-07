import { ElderlyClass } from "../../domain/elderly.class";
import { ElderlyService } from "../../services/elderly.service";
import { ActivatedRoute } from "@angular/router";

export abstract class AbstractElderlyModifier {

    public elderly: ElderlyClass;

    constructor(protected elderlyService: ElderlyService,
        protected route: ActivatedRoute) {
        this.elderly = this.route.snapshot.data['elderly'] || new ElderlyClass();
    }

    protected save(onCreated: Function = () => { }, onUpdated?: Function) {
        if (!onUpdated) {
            onUpdated = onCreated;
        }
        if (!this.elderly.id) {
            this.elderlyService.create(this.elderly).subscribe(
                (elderly) => { Object.assign(this.elderly, elderly); onCreated() }
            );
        } else {
            this.elderlyService.update(this.elderly).subscribe(
                (elderly) => { Object.assign(this.elderly, elderly); onUpdated() }
            );
        }
    }
}