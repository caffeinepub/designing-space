import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types";
import EnquiryLib "../lib/enquiry";

mixin (enquiries : List.List<Types.Enquiry>) {
  public func addEnquiry(enquiry : Types.Enquiry) : async Text {
    let stamped : Types.Enquiry = { enquiry with timestamp = Time.now() };
    EnquiryLib.add(enquiries, stamped);
    "success";
  };

  public query func getEnquiries() : async [Types.Enquiry] {
    EnquiryLib.getAll(enquiries);
  };
};
