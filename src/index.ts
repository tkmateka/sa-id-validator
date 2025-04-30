export interface SAIDValidationResult {
    isValid: boolean;
    gender: 'male' | 'female' | null;
    dateOfBirth: string | null;
    age: number | null;
}

export function validateSouthAfricanID(idNumber: string): SAIDValidationResult {
    const cleanId = idNumber.replace(/\D/g, '');

    if (cleanId.length !== 13) {
        return { isValid: false, gender: null, dateOfBirth: null, age: null };
    }

    // Validate date of birth
    const year = parseInt(cleanId.substring(0, 2), 10);
    const month = parseInt(cleanId.substring(2, 4), 10);
    const day = parseInt(cleanId.substring(4, 6), 10);

    let currentYear = new Date().getFullYear() % 100;
    let fullYear = year <= currentYear ? 2000 + year : 1900 + year;

    const dateOfBirth = new Date(fullYear, month - 1, day);
    const isValidDate = (
        dateOfBirth.getFullYear() === fullYear &&
        dateOfBirth.getMonth() === month - 1 &&
        dateOfBirth.getDate() === day
    );

    if (!isValidDate) {
        return { isValid: false, gender: null, dateOfBirth: null, age: null };
    }

    // Validate checksum using Luhn algorithm
    if (!isValidLuhn(cleanId)) {
        return { isValid: false, gender: null, dateOfBirth: null, age: null };
    }

    // Gender
    const genderDigits = parseInt(cleanId.substring(6, 10), 10);
    const gender = genderDigits < 5000 ? 'female' : 'male';

    // Age
    const today = new Date();
    let age = today.getFullYear() - fullYear;
    if (
        today.getMonth() < (month - 1) ||
        (today.getMonth() === (month - 1) && today.getDate() < day)
    ) {
        age--;
    }

    return {
        isValid: true,
        gender,
        dateOfBirth: `${fullYear.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
        age,
    };
}

function isValidLuhn(id: string): boolean {
    let sum = 0;
    let alternate = false;

    for (let i = id.length - 1; i >= 0; i--) {
        let n = parseInt(id.charAt(i), 10);

        if (alternate) {
            n *= 2;
            if (n > 9) {
                n = (n % 10) + 1;
            }
        }

        sum += n;
        alternate = !alternate;
    }

    return sum % 10 === 0;
}
