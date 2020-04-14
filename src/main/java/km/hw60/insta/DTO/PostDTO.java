package km.hw60.insta.DTO;

import km.hw60.insta.model.Post;
import lombok.*;

@Data
@Builder(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
public class PostDTO {

    public static PostDTO from(Post post) {
        return builder()
                .id(post.getId())
                .user(post.getUser().getEmail())
                .image(post.getImage())
                .description(post.getDescription())
                .build();
    }

    private String id;
    private String user;
    private String image;
    private String description;

}
