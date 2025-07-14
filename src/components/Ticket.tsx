import Icon from "./Icon";
import Logo from "./Logo";
import classes from "./Ticket.module.scss";

export default function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.left}>
        <div className={classes.info}>
          <Logo logo="mark" />

          <div>
            <div>Coding Conf</div>
            <div>Jan 31, 2025 / Austin, Texas</div>
          </div>
        </div>

        <div className={classes.client}>
          <img src="/image-avatar.jpg" alt="Your avatar picture" />

          <div>
            <div>Jonathan Kristof</div>
            <div>
              <Icon icon="github" />
              <div>@jonatankristof0101</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.number}>#00238</div>
      </div>
    </div>
  );
}
