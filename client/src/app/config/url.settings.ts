import { environment } from '../../environments/environment';

export class UrlSettings {
  /* Common values */

  // Base Url
  public static readonly API_ENDPOINT = environment.baseUrl + '/api/';

  // Suffixes
  public static readonly suffixRelation = 'rel';
  public static readonly count = 'count';
  public static readonly latest = 'latest';

  /* Models endpoint */

  // Elderly
  public static readonly elderlyModel = 'elderlies';
  
  // Skill
  public static readonly skillModel = 'skills';

  // User
  public static readonly userModel = 'users';
  public static readonly userAccessTokens = 'accessTokens';
  public static readonly userLogin = 'login';
  public static readonly userLogout = 'logout';
}
