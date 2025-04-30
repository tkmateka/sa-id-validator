export interface SAIDValidationResult {
    isValid: boolean;
    gender: 'male' | 'female' | null;
    dateOfBirth: string | null;
    age: number | null;
}
export declare function validateSouthAfricanID(idNumber: string): SAIDValidationResult;
