const policyMotions = [
    "This house would ban all nuclear weapons.",
    "This house would implement universal basic income.",
    "This house supports the legalization of all drugs."
];

const valueMotions = [
    "This house believes that freedom is more important than security.",
    "This house believes that individual rights should be prioritized over the collective good.",
    "This house believes that art is more valuable than science."
];

const funMotions = [
    "This house believes pineapple belongs on pizza.",
    "This house would make naps mandatory during work hours.",
    "This house believes cats are better than dogs."
];

document.getElementById("generateButton").addEventListener("click", () => {
    const motionType = document.querySelector('input[name="motionType"]:checked').value;
    let motion = '';

    if (motionType === 'policy') {
        motion = policyMotions[Math.floor(Math.random() * policyMotions.length)];
    } else if (motionType === 'value') {
        motion = valueMotions[Math.floor(Math.random() * valueMotions.length)];
    } else if (motionType === 'fun') {
        motion = funMotions[Math.floor(Math.random() * funMotions.length)];
    }

    document.getElementById("motionDisplay").innerText = motion;
});
