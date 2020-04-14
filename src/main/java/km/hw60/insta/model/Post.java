package km.hw60.insta.model;

import km.hw60.insta.util.Generator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document(collection = "posts")
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private String id;
    @DBRef
    private User user;
    private String image;
    private String description;
//    @DBRef
//    private List<Like> likes;

    public static Post make(User u) {
        Post p = new Post();
        p.setId(UUID.randomUUID().toString());
        p.setUser(u);
        p.setImage(Generator.makeName().trim().toLowerCase() + ".img");
        p.setDescription(Generator.makeDescription());
        return p;
    };

    public Post(User u, String image, String description) {
        this.id = UUID.randomUUID().toString();
        this.user = u;
        this.image = image;
        this.description = description;
    }
}
