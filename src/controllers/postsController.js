import {getPosts, createPost} from '../models/postModel.js'

const getAllPosts = async(req, res) => {
  try {
    console.log('allPosts')
    const allPosts = await getPosts();
    console.log(allPosts)
    res.status(200).json( allPosts );
  } catch (error) {
    res.status(500).json({ error: "Error al recuperar posts" });
    console.error("Error al recuperar posts:", error);
  }
};

const createPosts = async(req, res) => {
    try {
    const dataPost = req.body;
    console.log(dataPost)
    const newPost = await createPost(dataPost);
    res.status(201).json({ dataPost: newPost });
  } catch (error) {
    res.status(500).json({ error: "Error al grabar un post" });
    console.error("Error al grabar un post:", error);
  }
}
export { getAllPosts, createPosts };