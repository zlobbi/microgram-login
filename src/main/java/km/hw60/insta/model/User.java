package km.hw60.insta.model;

import km.hw60.insta.util.Generator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Data
@Document(collection = "users")
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    private String id;
    private String email;
    private String name;
    private String login;
    private String password;

    public static User make() {
        User u = new User();
        String name = Generator.makeName().toLowerCase();
        u.setId(UUID.randomUUID().toString());
        u.setEmail(Generator.makeEmail() + ".com");
        u.setPassword(Generator.makePassword());
        return u;
    }
    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_FULL"));
    }

    @Override
    public String getUsername() {
        return this.login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}


