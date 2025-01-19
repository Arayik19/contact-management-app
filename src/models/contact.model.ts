export interface ContactModel {
    id: string,
    image: string,
    userName: string,
    socialMediaUrl: string,
    description: string
}

export type ContactFormModel = Omit<ContactModel, 'id'>