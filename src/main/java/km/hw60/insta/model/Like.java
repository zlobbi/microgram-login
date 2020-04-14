//package km.hw60.insta.model;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.time.LocalDate;
//
//@Data
//@Document(collection = "likes")
//@AllArgsConstructor
//public class Like {
//    private String id;
//    @DBRef
//    private Post likeFor;
//    @DBRef
//    private User likeBy;
//    private LocalDate date;
//}
