export interface EditProfileForm {
    img: string;
    about: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    password: string;
}

export interface UpdateProfileForm {
    about?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    location?: string;
    password?: string;
}
