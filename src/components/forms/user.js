import { h, Component } from "preact";
import Message from "./message";
import Button from "./button";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      acceptedTerms: false,
      acceptedPrivacyPolicy: false,
    };
    this.showAlert = false;
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { page, message, saving, t } = this.props;
    const {
      firstname,
      lastname,
      email,
      password,
      acceptedTerms,
      acceptedPrivacyPolicy,
    } = this.state;

    return (
      <form
        onsubmit={this.handleLogin}
        className={`form ${saving ? "disabled" : ""}`}
      >
        {message && <Message type={message} t={t} />}
        {page.firstname && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">
                {t("form_name_placeholder")}
              </span>
              <input
                className="formControl"
                type="name"
                name="firstname"
                value={firstname}
                placeholder={
                  t("form_firstname_label")
                }
                autocapitalize="off"
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldName" />
            </label>
          </div>
        )}
        {page.lastname && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">
                {t("form_name_placeholder")}
              </span>
              <input
                className="formControl"
                type="name"
                name="lastname"
                value={lastname}
                placeholder={
                  t("form_lastname_label")
                }
                autocapitalize="off"
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldName" />
            </label>
          </div>
        )}
        {page.email && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">{t("form_email_label")}</span>
              <input
                className="formControl"
                type="email"
                name="email"
                value={email}
                placeholder={t("form_email_placeholder")}
                autocapitalize="off"
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldEmail" />
            </label>
          </div>
        )}
        {page.password && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">{t("form_password_label")}</span>
              <input
                className="formControl"
                type="password"
                name="password"
                value={password}
                placeholder={t("form_password_placeholder")}
                autocomplete={page.password}
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldPassword" />
            </label>
          </div>
        )}
        {page.checkboxtos && (
          <div className="formGroup">
            <label>
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={acceptedTerms}
                required
                onchange={this.handleCheckboxChange}
              />
              {t("form_accept_terms_label")}{" "}
              <a href="/terms-of-service" target="_blank">{t("form_terms_of_service_link")}</a>
            </label>
          </div>
        )}
        {page.checkboxpp && (
          <div className="formGroup">
            <label>
              <input
                type="checkbox"
                name="acceptedPrivacyPolicy"
                checked={acceptedPrivacyPolicy}
                required
                onchange={this.handleCheckboxChange}
              />
              {t("form_accept_privacy_policy_label")}{" "}
              <a href="/privacy-policy" target="_blank">{t("form_privacy_policy_link")}</a>
            </label>
          </div>
        )}
        <Button
          saving={saving}
          text={t(page.button)}
          saving_text={t(page.button_saving)}
        />
      </form>
    );
  }
}