package km.hw60.insta.model;

import km.hw60.insta.util.Generator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document(collection = "users")
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String id;
    private String email;
    private String password;

    public static User make() {
        User u = new User();
        String name = Generator.makeName().toLowerCase();
        u.setId(UUID.randomUUID().toString());
        u.setEmail(Generator.makeEmail() + ".com");
        u.setPassword(Generator.makePassword());
        return u;
    }
}


