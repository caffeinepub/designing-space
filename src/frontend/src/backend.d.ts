import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    productInterest: string;
    quantity: string;
    phone: string;
}
export interface backendInterface {
    addEnquiry(enquiry: Enquiry): Promise<string>;
    getEnquiries(): Promise<Array<Enquiry>>;
}
