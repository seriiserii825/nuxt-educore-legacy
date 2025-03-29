<script setup lang="ts">
const dashboard_link = ref("");

const user = useGetUser();

onMounted(() => {
  dashboard_link.value =
    user && user.role === "student"
      ? "/student/dashboard"
      : "/instructor/dashboard";
});
</script>

<template>
  <div class="main-menu">
    <nav class="navbar navbar-expand-lg main_menu main_menu_3">
      <nuxt-link class="navbar-brand" to="/">
        <img src="/images/logo.png" alt="EduCore" class="img-fluid" />
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="menu_category">
          <div class="icon">
            <img src="/images/grid_icon.png" alt="Category" class="img-fluid" />
          </div>
          Category
          <ul>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_1.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Development
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_2.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Business
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_3.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Marketing
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_4.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Lifestyle
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_5.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Health & Fitness
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_6.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Design
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/menu_category_icon_7.png"
                    alt="Category"
                    class="img-fluid"
                  />
                </span>
                Academics
              </a>
              <ul class="category_sub_menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Courses <i class="far fa-angle-down"></i
            ></a>
            <ul class="droap_menu">
              <li><a href="courses.html">Courses</a></li>
              <li><a href="courses_details.html">Course details</a></li>
              <li><a href="course_video.html">Course video</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >pages <i class="far fa-angle-down"></i
            ></a>
            <ul class="droap_menu">
              <li><a href="category.html">Categories</a></li>
              <li><a href="cart_view.html">cart view</a></li>
              <li><a href="checkout.html">checkout</a></li>
              <li><a href="payment.html">payment</a></li>
              <li><a href="pricing.html">pricing</a></li>
              <li><a href="student_reviews.html">student review</a></li>
              <li><a href="instructor.html">Instructor</a></li>
              <li><a href="instructor_details.html">Instructor details</a></li>
              <li><a href="instructor_finder.html">Instructor finder</a></li>
              <li><a href="error.html">error</a></li>
              <li><a href="faq.html">faq</a></li>
              <li><a href="sign_in.html">sign in</a></li>
              <li><a href="sign_up.html">sign up</a></li>
              <li><a href="forum.html">forum</a></li>
              <li><a href="forum_categories.html">forum Categories</a></li>
              <li><a href="forum_create_topic.html">forum create topic</a></li>
              <li><a href="forum_single_topic.html">forum single topic</a></li>
              <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >blog <i class="far fa-angle-down"></i
            ></a>
            <ul class="droap_menu">
              <li><a href="blogs.html">blog grid view</a></li>
              <li><a href="blog_list.html">blog list view</a></li>
              <li><a href="blog_details.html">blog details</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">contact us</a>
          </li>
        </ul>

        <div class="right_menu">
          <div class="menu_search_btn">
            <img src="/images/search_icon.png" alt="Search" class="img-fluid" />
          </div>
          <ul class="d-flex gap-3">
            <li if="user && user.email">
              <span class="admin d-flex">
                <span>
                  <img
                    src="/images/user_icon_black.png"
                    alt="user"
                    class="img-fluid"
                  />
                </span>
                <span style="text-transform: lowercase; width: auto">{{
                  user && user.email
                }}</span>
              </span>
            </li>
            <li v-if="user && user.email">
              <nuxt-link class="common_btn" :to="dashboard_link"
                >Dashboard</nuxt-link
              >
            </li>
            <li v-if="user && user.role === 'admin'">
              <nuxt-link class="common_btn_2" to="/admin">Admin</nuxt-link>
            </li>
            <li v-if="user && user.email">
              <nuxt-link class="common_btn" to="/logout">Logout</nuxt-link>
            </li>
            <li v-else>
              <nuxt-link class="common_btn" to="/login">Sign in</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wsus__menu_3_search_area">
      <form action="#">
        <input type="text" placeholder="Search School, Online....." />
        <button class="common_btn" type="submit">Search</button>
        <span class="close_search"><i class="far fa-times"></i></span>
      </form>
    </div>
  </div>
</template>
