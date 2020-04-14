package km.hw60.insta.service;

import km.hw60.insta.model.Comment;
import km.hw60.insta.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    public List<Comment> getAllComments() {
        Iterable<Comment> slice = commentRepository.findAll();
        List<Comment> comments = new ArrayList<>();
        slice.forEach(comment -> comments.add(comment));
        return comments;
    }
}
