// this is src/components/landing
import "./landing.css";
// import go from "../../../files/Images/go.mp4";

export const Landing = (props) => {
  let vidsrc = "https://firebasestorage.googleapis.com/v0/b/netflix-86f08.appspot.com/o/Cover%2FGUARDIAN%20-%20THE%20LONELY%20AND%20GREAT%20GOD%20(GOBLIN)%20-%20OFFICIAL%20TRAILER%20_%20Gong%20Yoo%2C%20Lee%20Dong%20Wook%2C%20Kim%20Go%20Eun.mp4?alt=media&token=fbed9bbb-1645-44fc-884e-32b4f805732b" 
  let img = "https://firebasestorage.googleapis.com/v0/b/netflix-86f08.appspot.com/o/Cover%2Foriginal.jpg?alt=media&token=1322743f-8134-4f2e-8af5-228529ff5a51"
  return (
    <>
    <div id='Landing' className="return">
      <video src= {vidsrc}
      muted className="background" autoPlay 
      poster= {img}
      alt= {vidsrc} ></video>
      <div className="divall container-fluid">
        <div className="row">
          <div className="col1 col-5">
            <img src="https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUbBjRwVQZd8S5iEggUToKEM5wWK8GP6X8P7vz3efLTJZfkMCQZ9s8VXBUc3hTPQR-VnOl3vqV4z_TAConDHA1I-MeZzUKwgwlk.webp?r=6b4" alt="" className="movielogo" ></img>

            <h3>Watch Now</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptatibus rerum autem harum, natus dolor perspiciatis
              praesentium laborum.
            </p>
            <div className="buttons">
              <a className="btn btn-light mr-3" href="http://localhost:3000/preview">
              <i className="fas fa-band-aid"></i>
                <span>Play</span>
              </a>

              <a className="btn btn-danger" href="http://localhost:3000/details">
              <i className="fas fa-band-aid"></i>
                <span>More Info</span>
              </a>
            </div>
          </div>

          <div className="col2 col-5">
            <i>M</i>
            <div className="age">+15</div>
          </div>

        </div>  {/* end row */}
      </div>  {/* end divall */}
      </div>  {/* end return */}
    </>
  );
};
