// import API_ENDPOINT from '../../globals/api-endpoint';
import CourseDbSource from '../../data/course-db-source';

const courseItemTemplate = async (course) => `
    <article class="card">
        <div class="card-img">
          <img src="${course.image}" alt="picture of ${course.judul} course">
        </div>
        <div class="card-body">
          <h3 class="course-title">${course.judul}</h3>
          <p class="course-description">${course.isi}</p>
        </div>
    </article>
`;

export default courseItemTemplate;
