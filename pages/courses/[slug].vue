<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";
const route = useRoute();
const course = ref<TCourse>();
const loading = ref<boolean>(false);
const slug = route.params.slug;

async function getCourse() {
  loading.value = true;
  try {
    const data = await axiosInstance.get(`/courses/${slug}`);
    course.value = data.data;
    loading.value = false;
  } catch (error) {
    handleAxiosError(error, {});
    console.log(error, "error");
    loading.value = false;
  }
}
onMounted(async () => {
  await getCourse();
});
</script>

<template>
  <div>
    <UiLoading v-if="loading" />
    <template v-else-if="course">
      <CourseBreadcrumb :course="course" />
      <section class="wsus__courses_details pb_120 xs_pb_100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 wow fadeInLeft">
              <div class="wsus__courses_details_area mt_40">
                <ul class="nav nav-pills mb_40" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Overview
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Curriculum
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Instructor
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      FAQs
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-disabled-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled2"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled2"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active">
                    <CourseDescription :course="course" />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0"
                  >
                    <div class="wsus__courses_curriculum box_area">
                      <h3>Course Curriculum</h3>
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Course Prelude & EduCore Learning Presentation
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <ul>
                                <li class="active">
                                  <p>Brush up on Java concepts</p>
                                  <span class="right_text">Preview</span>
                                </li>
                                <li>
                                  <a href=""
                                    >User Experience Fundamentals Course</a
                                  >
                                  <span class="right_text">24 minutes</span>
                                </li>
                                <li>
                                  <p>
                                    Brisk Guide to Using Pivot Tables in Excel
                                  </p>
                                  <span class="right_text">7 minutes</span>
                                </li>
                                <li>
                                  <p>User-Centric Design Fundamentals</p>
                                  <span class="right_text">21 minutes</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Essential HTML Building Elements
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <ul>
                                <li class="active">
                                  <p>Brush up on Java concepts</p>
                                  <span class="right_text">Preview</span>
                                </li>
                                <li>
                                  <a href=""
                                    >User Experience Fundamentals Course</a
                                  >
                                  <span class="right_text">24 minutes</span>
                                </li>
                                <li>
                                  <p>
                                    Brisk Guide to Using Pivot Tables in Excel
                                  </p>
                                  <span class="right_text">7 minutes</span>
                                </li>
                                <li>
                                  <p>User-Centric Design Fundamentals</p>
                                  <span class="right_text">21 minutes</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Fundamental Programming Idea
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <ul>
                                <li class="active">
                                  <p>Brush up on Java concepts</p>
                                  <span class="right_text">Preview</span>
                                </li>
                                <li>
                                  <a href=""
                                    >User Experience Fundamentals Course</a
                                  >
                                  <span class="right_text">24 minutes</span>
                                </li>
                                <li>
                                  <p>
                                    Brisk Guide to Using Pivot Tables in Excel
                                  </p>
                                  <span class="right_text">7 minutes</span>
                                </li>
                                <li>
                                  <p>User-Centric Design Fundamentals</p>
                                  <span class="right_text">21 minutes</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0"
                  >
                    <div class="wsus__courses_instructor box_area">
                      <h3>Instructor Details</h3>
                      <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6">
                          <div class="wsus__courses_instructor_img">
                            <img
                              src="/images/course_instructor_img.jpg"
                              alt="Instructor"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-6">
                          <div class="wsus__courses_instructor_text">
                            <h4>Ravi O'Leigh</h4>
                            <p class="designation">IT Technician at IBM</p>
                            <ul class="list">
                              <li>
                                <i class="fas fa-star"></i>
                                <b>74,537 Reviews</b>
                              </li>
                              <li><strong>4.7 Rating</strong></li>
                              <li>
                                <span
                                  ><img
                                    src="/images/book_icon.png"
                                    alt="book"
                                    class="img-fluid"
                                /></span>
                                8 Courses
                              </li>
                              <li>
                                <span
                                  ><img
                                    src="/images/user_icon_gray.png"
                                    alt="user"
                                    class="img-fluid"
                                /></span>
                                32 Students
                              </li>
                            </ul>
                            <ul class="badge d-flex flex-wrap">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Exclusive Author"
                              >
                                <img
                                  src="/images/badge_1.png"
                                  alt="Badge"
                                  class="img-fluid"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Top Earning"
                              >
                                <img
                                  src="/images/badge_2.png"
                                  alt="Badge"
                                  class="img-fluid"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Trending"
                              >
                                <img
                                  src="/images/badge_3.png"
                                  alt="Badge"
                                  class="img-fluid"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="2 Years of Membership"
                              >
                                <img
                                  src="/images/badge_4.png"
                                  alt="Badge"
                                  class="img-fluid"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Collector Lavel 1"
                              >
                                <img
                                  src="/images/badge_5.png"
                                  alt="Badge"
                                  class="img-fluid"
                                />
                              </li>
                            </ul>
                            <p class="description">
                              Sed mi leo placerat nulla Donec pharetra rutrum
                              ullamcorpe Ut eget convallis mi. Sed cursus
                              aliquam Nula sed allium lectus fermentum enim Nam
                              maximus pretium consectetu lacinia finibus.
                            </p>
                            <ul class="link d-flex flex-wrap">
                              <li>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                              </li>
                              <li>
                                <a href="#"
                                  ><i class="fab fa-facebook-f"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#"
                                  ><i class="fab fa-linkedin-in"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#"
                                  ><i class="fab fa-pinterest-p"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                    tabindex="0"
                  >
                    <div class="wsus__course_faq box_area">
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              How long it take to create a video course?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Sed mi leo, accumsan vel ante at, viverra placerat
                              nulla. Donec pharetra rutrum ullamcorpe Ut eget
                              convallis mi. Sed cursus aliquam eitu Nula sed
                              allium lectus fermentum enim Nam maximus pretium
                              consectetu lacinia finibus ipsum, eget fermentum
                              nulla Pellentesque id facilisis magna dictum.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              What kind of support does EduCore provide?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Sed mi leo, accumsan vel ante at, viverra placerat
                              nulla. Donec pharetra rutrum ullamcorpe Ut eget
                              convallis mi. Sed cursus aliquam eitu Nula sed
                              allium lectus fermentum enim Nam maximus pretium
                              consectetu lacinia finibus ipsum, eget fermentum
                              nulla Pellentesque id facilisis magna dictum.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              How long do I get support & updates?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Placeholder content for this accordion, Sed mi
                              leo, accumsan vel ante at, viverra placerat nulla.
                              Donec pharetra rutrum ullamcorpe Ut eget convallis
                              mi. Sed cursus aliquam eitu Nula sed allium lectus
                              fermentum enim Nam maximus pretium consectetu
                              lacinia finibus ipsum, eget fermentum nulla
                              Pellentesque id facilisis magna dictum.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree3"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              How can I contact a school directly?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree3"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Sed mi leo, accumsan vel ante at, viverra placerat
                              nulla. Donec pharetra rutrum ullamcorpe Ut eget
                              convallis mi. Sed cursus aliquam eitu Nula sed
                              allium lectus fermentum enim Nam maximus pretium
                              consectetu lacinia finibus ipsum, eget fermentum
                              nulla Pellentesque id facilisis magna dictum.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-disabled2"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab2"
                    tabindex="0"
                  >
                    <div class="wsus__courses_review box_area">
                      <h3>Customer Reviews</h3>
                      <div class="row align-items-center mb_50">
                        <div class="col-xl-4 col-md-6">
                          <div class="total_review">
                            <h2>4.7</h2>
                            <p>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </p>
                            <h4>3 Ratings</h4>
                          </div>
                        </div>
                        <div class="col-xl-8 col-md-6">
                          <div class="review_bar">
                            <div class="review_bar_single">
                              <p>5 <i class="fas fa-star"></i></p>
                              <div id="bar1" class="barfiller">
                                <div class="tipWrap">
                                  <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="85"></span>
                              </div>
                              <span class="qnty">87</span>
                            </div>
                            <div class="review_bar_single">
                              <p>4 <i class="fas fa-star"></i></p>
                              <div id="bar2" class="barfiller">
                                <div class="tipWrap">
                                  <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="70"></span>
                              </div>
                              <span class="qnty">69</span>
                            </div>
                            <div class="review_bar_single">
                              <p>3 <i class="fas fa-star"></i></p>
                              <div id="bar3" class="barfiller">
                                <div class="tipWrap">
                                  <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="50"></span>
                              </div>
                              <span class="qnty">44</span>
                            </div>
                            <div class="review_bar_single">
                              <p>2 <i class="fas fa-star"></i></p>
                              <div id="bar4" class="barfiller">
                                <div class="tipWrap">
                                  <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="30"></span>
                              </div>
                              <span class="qnty">29</span>
                            </div>
                            <div class="review_bar_single">
                              <p>1 <i class="fas fa-star"></i></p>
                              <div id="bar5" class="barfiller">
                                <div class="tipWrap">
                                  <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="10"></span>
                              </div>
                              <span class="qnty">12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Reviews</h3>
                      <div class="wsus__course_single_reviews">
                        <div class="wsus__single_review_img">
                          <img
                            src="/images/testimonial_user_1.png"
                            alt="user"
                            class="img-fluid"
                          />
                        </div>
                        <div class="wsus__single_review_text">
                          <h4>Dominic L. Ement</h4>
                          <h6>
                            March 23,2024 at 8:37 pm
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                          </h6>
                          <p>
                            Donec vel mauris at lectus iaculis elementum vel vel
                            lacus. Sed finibus velit vitae risus imperdiet
                            placerat. Ut posuere eros ut molestie rhoncus. Duis
                            eget ex elementum, ultricies dolor sed, hendrerit
                            diam. Donec ut blandit nunc, et tempus lorem.
                          </p>
                        </div>
                      </div>
                      <div class="wsus__course_single_reviews">
                        <div class="wsus__single_review_img">
                          <img
                            src="/images/testimonial_user_2.png"
                            alt="user"
                            class="img-fluid"
                          />
                        </div>
                        <div class="wsus__single_review_text">
                          <h4>Smith jhon</h4>
                          <h6>
                            March 23,2024 at 8:37 pm
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                          </h6>
                          <p>
                            Donec vel mauris at lectus iaculis elementum vel vel
                            lacus. Sed finibus velit vitae risus imperdiet
                            placerat. Ut posuere eros ut molestie rhoncus. Duis
                            eget ex elementum, ultricies dolor sed, hendrerit
                            diam. Donec ut blandit nunc, et tempus lorem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="wsus__courses_review_input box_area mt_40">
                      <h3>Write a Review</h3>
                      <p class="short_text">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <div class="select_rating d-flex flex-wrap">
                        Your Rating:
                        <ul id="starRating" data-stars="5"></ul>
                      </div>
                      <form action="#">
                        <div class="row">
                          <div class="col-xl-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div class="col-xl-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div class="col-xl-12">
                            <textarea
                              rows="7"
                              placeholder="Comments"
                            ></textarea>
                          </div>
                          <div class="col-12">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                            <a href="#" class="common_btn">Post Comment</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 wow fadeInRight">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
