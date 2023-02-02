const HasLetters = (password: string) => /(?=.*[a-zA-Z])/.test(password);
const HasNumbers = (password: string) => /(?=.*[0-9])/.test(password);
const HasSymbols = (password: string) => /(?=.*\W)/.test(password);

export const IsEmpty = (password: string) =>  password === '';

export const IsTooShort = (password: string, minimalPasswordLength: number) => password.length < minimalPasswordLength;

export const IsEasy = (password: string) => HasLetters(password) || HasNumbers(password) || HasSymbols(password);

export const IsMedium = (password: string) =>
    (HasLetters(password) && HasSymbols(password))
    ||
    (HasLetters(password) && HasNumbers(password))
    ||
    (HasSymbols(password) && HasNumbers(password))
;

export const IsStrong = (password: string) => HasLetters(password) && HasNumbers(password) && HasSymbols(password);



