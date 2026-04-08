import List "mo:core/List";
import Types "../types";

module {
  public func add(enquiries : List.List<Types.Enquiry>, enquiry : Types.Enquiry) {
    enquiries.add(enquiry);
  };

  public func getAll(enquiries : List.List<Types.Enquiry>) : [Types.Enquiry] {
    enquiries.toArray();
  };
};
