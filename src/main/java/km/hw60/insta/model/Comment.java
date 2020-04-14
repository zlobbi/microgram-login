package km.hw60.insta.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document(collection = "comments")
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private String id;
    private String commentator;
    private String commentFor;
    private String comment;
    private String userEmail;

    public Comment (String commentator, String commentFor, String comment, String userEmail) {
        this.id = UUID.randomUUID().toString();
        this.commentator = commentator;
        this.commentFor = commentFor;
        this.comment = comment;
        this.userEmail = userEmail;
    }

}
