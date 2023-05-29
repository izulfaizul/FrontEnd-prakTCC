import CourseDbSource from '../../data/course-db-source';

const Add = {
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

  async renderMain() {
    return `
        <h2>Add Course</h2>
        <div class="course-form">
          <form>
            <div class="mb-3 row">
                <label for="judul" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="judul" placeholder="Title Course">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="deskripsi" class="col-sm-2 col-form-label">deskripsi</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="deskripsi" placeholder="Description Course">
                </div>
            </div>
            <div class="input-group mb-3">
                <label class="col-sm-2 col-form-label" for="gambar">Upload Course Image</label>
                <input type="file" class="form-control" id="gambar">
            </div>
            <div class="wrapper-button">
                <button type="submit" class="btn btn-primary">Submit</button>   
            </div>
          </form>
        </div>
        `;
  },

  async afterRender() {
    const formData = new FormData();
    const courseForm = document.querySelector('form');
    courseForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const judul = document.querySelector('#judul').value;
      const isi = document.querySelector('#deskripsi').value;
      const image = document.querySelector('#gambar').files[0];

      formData.append('judul', judul);
      formData.append('isi', isi);
      formData.append('Image', image);
      console.log(`${JSON.stringify(Object.fromEntries(formData))}`);

      const { data } = await CourseDbSource.add(formData);
      console.log('tes');
      if (data) {
        window.location.href = '/';
      }
    });

    const logout = document.querySelector('.logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('auth');
      window.location.href = '/#/login';
    });
  },
};

export default Add;
