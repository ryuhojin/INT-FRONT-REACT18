import { media } from "@/libs/styles";
import styled from "styled-components";

const StyledWriteSwitch = styled.div`
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  ${media.small} {
    font-size: 0.8rem;
  }
  span {
    display: flex;
    align-items: center;
    label {
      margin-left: 0.5rem;
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1rem;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    display: flex;
    align-self: center;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #f67e7d;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #f67e7d;
  }

  input:checked + .slider:before {
    transform: translateX(1.5rem);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
interface WriteSwitchProps {
  mode: string;
  onChangeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const WriteSwitch: React.FC<WriteSwitchProps> = ({ mode, onChangeMode }) => (
  <StyledWriteSwitch>
    <span> 내용 </span>
    <span>
      {mode === "WRITER" ? "미리보기" : "작성하기"}
      <label className="switch">
        <input type="checkbox" onChange={onChangeMode} />
        <span className="slider round"></span>
      </label>
    </span>
  </StyledWriteSwitch>
);
export default WriteSwitch;
