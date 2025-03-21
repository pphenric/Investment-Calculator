import UserInput from "./UserInput";

export default function InputSection({inputData}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <UserInput inputData={inputData} inputIndex={0} labelName="INITIAL INVESTMENT" />
                <UserInput inputData={inputData} inputIndex={1} labelName="ANNUAL INVESTMENT" />
            </div>
            <div className="input-group">
                <UserInput inputData={inputData} inputIndex={2} labelName="EXPECTED ANNUAL RETURN RATE (%)" />
                <UserInput inputData={inputData} inputIndex={3} labelName="INVESTMENT PERIOD (Years)" />
            </div>
        </section>
    );
}