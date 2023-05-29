/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import CourseDbSource from '../../data/course-db-source';
import courseItemTemplate from '../templates/template-creator';

const Home = {
  async renderMain() {
    return `
        <h2>Course List</h2>
        <div class="course-list"></div>
        `;
  },

  async renderHeader() {
    return `
    <nav>
    <div class="navigate-title">
      <button id="hamburger-icon" aria-label="Skip to content"><img src="./images/hamburger_icon.png" alt=""></button>
      <a href="/"><h1>Aplikasi Kriptografi</h1></a>
    </div>
    <ul class="navigate-link">
      <li><a href="/#/home">Home</a></li>
      <li><a href="/#/add">Add</a></li>
      <li><button class="logout" type="button">Logout</button></li>
    </ul>
  </nav>
    `;
  },

  async afterRender() {
    const courseList = document.querySelector('.course-list');
    const courses = await CourseDbSource.home();

    // const picture = courses.map(async (course) => CourseDbSource.picture(course.id));
    // for (let i = 0; i < courses.length; i += 1) {
    //   courseList.innerHTML += await courseItemTemplate(courses[i]);
    // }

    for (const course of courses) {
      courseList.innerHTML += await courseItemTemplate(course);
    }

    const logout = document.querySelector('.logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('auth');
      window.location.href = '/#/login';
    });
  },
};

export default Home;
