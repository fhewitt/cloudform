import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export declare class GenerateSecretString {
    ExcludeUppercase?: Value<boolean>;
    RequireEachIncludedType?: Value<boolean>;
    IncludeSpace?: Value<boolean>;
    ExcludeCharacters?: Value<string>;
    GenerateStringKey?: Value<string>;
    PasswordLength?: Value<number>;
    ExcludePunctuation?: Value<boolean>;
    ExcludeLowercase?: Value<boolean>;
    SecretStringTemplate?: Value<string>;
    ExcludeNumbers?: Value<boolean>;
    constructor(properties: GenerateSecretString);
}
export interface SecretProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    SecretString?: Value<string>;
    GenerateSecretString?: GenerateSecretString;
    Tags?: ResourceTag[];
    Name?: Value<string>;
}
export default class Secret extends ResourceBase {
    static GenerateSecretString: typeof GenerateSecretString;
    constructor(properties?: SecretProperties);
}
