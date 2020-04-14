package km.hw60.insta.service;

import km.hw60.insta.DTO.PostDTO;
import km.hw60.insta.model.Post;
import km.hw60.insta.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostDTO> getAllPosts() {
        Iterable<Post> slice = postRepository.findAll();
        List<PostDTO> re = new ArrayList<>();
        slice.iterator().forEachRemaining(s -> re.add(PostDTO.from(s)));
        return re;
    }

    public void savePost(Post post) {
        this.postRepository.save(post);
    }

    public Object getPostById(String postId) {
        return postRepository.findById(postId);
    }
}
