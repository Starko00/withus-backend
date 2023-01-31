const express = require('express')
const { createBlog, editBlog, getBlogs, deleteBlog, uploadImg, uploadBlogImg, getOneBlog } = require('../controllers/blogController')


const router = express.Router()


router.route('/').get(getBlogs).post(getOneBlog)
router.route('/admin/create').post(createBlog)
router.route('/admin/update').patch(editBlog).delete(deleteBlog).post(uploadImg,uploadBlogImg)

module.exports = router