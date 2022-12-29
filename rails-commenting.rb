# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is a class called BlogPosts Contoller. BlogPosts Controller is a controller that interacts between the user, views, and the models. Otherwise known as the MVC architecture. 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # We are creating a RESTful route that will call the index method. The instance variable @posts will return all blog posts
    @posts = BlogPost.all
  end

  # ---3)
  # We are creating a RESTful route that looks for only one item in the database. We can use :id to find the specific item.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # We are creating a new blog form that users will be able to use to insert predetermined data
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # RESTful route create submits form data to the database. The blog_post_params is exercising strong params for added secruity
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # The RESTful route edit will find a particular blogpost by id and return the form to edit it.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #RESTful route update will update a particular blog post by id. Again strong params are inserted for added security so users are only able to submit predetermined data.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # redirect_to blog_posts_path will redirect the user to a specified path if the particular blog is deleted. ie path /BlogPost
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private is a command that makes code below not viewable/editable to users
  private
  def blog_post_params
    # ---10)
    # This is strong params which only allows users to send title data and content data within the table blog_post. It is possible that other column headings exist within the table such as :date. Since :date is not listid within the permitted criteria, the user would not be able to add/edit this particular data.
    params.require(:blog_post).permit(:title, :content)
  end
end
