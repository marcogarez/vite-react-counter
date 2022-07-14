export const FirstApp = ({ title, subTitle, number }) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <code>{number + 321}</code>
        </>
    )
}
