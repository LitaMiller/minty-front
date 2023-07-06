import Kitchen from "../Kitchen/Kitchen";
import Room from "../Room/Room";
import css from "./WorkInclude.module.css";

const WorkInclude = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>У роботу входить</h2>
        <Room />
        <Kitchen/>
      </div>
    </section>
  );
};

export default WorkInclude;
