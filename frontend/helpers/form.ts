export const isValidEmailCheck = (email:string) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
