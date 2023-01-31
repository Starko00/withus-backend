const Blog = require("../db/blogModel");
const multer = require("multer");
exports.createBlog = async (req, res, next) => {
  try {
    const newBlog = await Blog.create({
      language: req.body.language,
      tittle: req.body.tittle,
      text: req.body.text,
    });
    res.status(200).json({
      msg: "Created",
      newBlog,
    });
  } catch (error) {
    res.status(201).json({
      msg: error,
    });
  }
};
exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      msg: "Found",
      blogs,
    });
  } catch (error) {
    res.status(201).json({
      msg: error,
    });
  }
};
exports.editBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      { _id: req.body._id },
      {
        language: req.body.data.language,
        tittle: req.body.data.tittle,
        text: req.body.data.text,
      },
      { new: true }
    );
    res.status(200).json({
      msg: "Updated",
      updatedBlog,
    });
  } catch (error) {
    res.status(201).json({
      msg: error,
    });
  }
};
exports.deleteBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndDelete({ _id: req.body._id });
    res.status(200).json({
      msg: `Blog ${req.body._id} deleted`,
      updatedBlog,
    });
  } catch (error) {
    res.status(201).json({
      msg: error,
    });
  }
};
exports.getOneBlog = async(req,res,next)=>{
  try {
    const tittleTofind = req.body.tittle.replaceAll('-'," ")
  const blog = await Blog.find({tittle:tittleTofind})
  res.status(200).json({
    blog
  })
  } catch (error) {
    res.status(201).json({
      error
    })
  }
  
}



//Add pictures
const blogImgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/blogImgs");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, req.body._id+"."+ext);
  },
});
const blogImgUpload = multer({ storage: blogImgStorage });

exports.uploadImg = blogImgUpload.single("blogImg");

exports.uploadBlogImg = async (req, res, next) => {
  try {
    const filename = req.file.filename;
    const blogImage = await Blog.findByIdAndUpdate(
      { _id: req.body._id },
      { img: filename },
      { new: true }
    );
    res.status(200).json({
      msg: "BlogIMG uploaded",
      blogImage,
    });
  } catch (error) {
    res.status(201).json({
      error,
    });
  }
};