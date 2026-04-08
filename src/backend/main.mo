import List "mo:core/List";
import Types "types";
import EnquiryMixin "mixins/enquiry-api";

actor {
  let enquiries = List.empty<Types.Enquiry>();
  include EnquiryMixin(enquiries);
};
