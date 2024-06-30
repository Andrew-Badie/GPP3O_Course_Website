document.addEventListener('DOMContentLoaded', () => {
    const charScores = JSON.parse(localStorage.getItem('characterScores'));
    const skillScores = JSON.parse(localStorage.getItem('skillScores'));

    const resultsContainer = document.getElementById('results');
    const paragraphSection = document.getElementById('paragraph-section');

    const createScoreElement = (name, score) => {
        const totalScore = 50;
        const percentage = ((score / totalScore) * 100).toFixed(2) + '%';

        return `<tr>
            <td>${name}</td>
            <td>${score} / ${totalScore}</td>
            <td>${percentage}</td>
        </tr>`;
    };

    let highestCharacterText = '';
    let highestSkillText = '';

    if (charScores) {
        const charScoresDiv = document.createElement('div');
        charScoresDiv.innerHTML = '<h2>Character Traits Scores</h2><table><thead><tr><th>Trait</th><th>Score</th><th>Percentage</th></tr></thead><tbody></tbody></table>';
        const tbody = charScoresDiv.querySelector('tbody');

        let highestCharTrait = '';
        let highestCharScore = 0;

        for (let trait in charScores) {
            tbody.innerHTML += createScoreElement(trait, charScores[trait]);
            if (charScores[trait] > highestCharScore) {
                highestCharScore = charScores[trait];
                highestCharTrait = trait;
            }
        }
        resultsContainer.appendChild(charScoresDiv);

        highestCharacterText = `Your highest character trait is ${highestCharTrait}, which indicates ${getCharacterDescription(highestCharTrait)}.`;
    }

    if (skillScores) {
        const skillScoresDiv = document.createElement('div');
        skillScoresDiv.innerHTML = '<h2>Skills Scores</h2><table><thead><tr><th>Skill</th><th>Score</th><th>Percentage</th></tr></thead><tbody></tbody></table>';
        const tbody = skillScoresDiv.querySelector('tbody');

        let highestSkill = '';
        let highestSkillScore = 0;

        for (let skill in skillScores) {
            tbody.innerHTML += createScoreElement(skill, skillScores[skill]);
            if (skillScores[skill] > highestSkillScore) {
                highestSkillScore = skillScores[skill];
                highestSkill = skill;
            }
        }
        resultsContainer.appendChild(skillScoresDiv);

        highestSkillText = `Your highest skill is ${highestSkill}, which indicates ${getSkillDescription(highestSkill)}.`;
    }

    if (highestCharacterText && highestSkillText) {
        const highestCharacterElement = document.createElement('p');
        highestCharacterElement.innerText = highestCharacterText;
        paragraphSection.appendChild(highestCharacterElement);

        const highestSkillElement = document.createElement('p');
        highestSkillElement.innerText = highestSkillText;
        paragraphSection.appendChild(highestSkillElement);
    }
});

function getCharacterDescription(trait) {
    const descriptions = {
        'Authentic': 'you model integrity, are honest and genuine, and adhere to deeply held Christian values, reflecting the truth of Christ in all you do. "The integrity of the upright will guide them, but the perversity of the unfaithful will destroy them." (Proverbs 11:3, NKJV)',
        'Christ-Centered': 'you follow the example of Jesus, practice spiritual disciplines, and model compassion and care for the poor and hurting, putting Christ at the center of your life. "For to me, to live is Christ, and to die is gain." (Philippians 1:21, NKJV)',
        'Courageous': 'you resolve conflict, ask tough questions, and attempt new experiences, trusting in God\'s strength and presence. "Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." (Joshua 1:9, NKJV)',
        'Determined': 'you show tenacity and persistence, demonstrate resilience, and refuse to get easily discouraged or distracted, relying on God\'s promises and faithfulness. "And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart." (Galatians 6:9, NKJV)',
        'Reliable': 'you exhibit dependability, come through at critical moments, and accept ownership for mistakes, demonstrating faithfulness as a steward of God\'s gifts. "Moreover it is required in stewards that one be found faithful." (1 Corinthians 4:2, NKJV)',
        'Teachable': 'you are secure, remain approachable and accountable, and regularly engage in reflection for personal growth, seeking wisdom and guidance from God. "Listen to counsel and receive instruction, that you may be wise in your latter days." (Proverbs 19:20, NKJV)'
    };
    return descriptions[trait];
}

function getSkillDescription(skill) {
    const descriptions = {
        'Influential': 'you inspire and motivate others, communicate with clarity and confidence, and display a hopeful outlook, shining the light of Christ in all you do. "Let your light so shine before men, that they may see your good works and glorify your Father in heaven." (Matthew 5:16, NKJV)',
        'Innovative': 'you foster creativity, think outside the box, and cast vision for the future, seeking God\'s guidance to make a way in new endeavors. "Behold, I will do a new thing, now it shall spring forth; shall you not know it? I will even make a road in the wilderness and rivers in the desert." (Isaiah 43:19, NKJV)',
        'Inter-Dependent': 'you thrive in a team environment, recruit and delegate effectively, and share resources and serve others, recognizing the unity and diversity in the body of Christ. "For as we have many members in one body, but all the members do not have the same function, so we, being many, are one body in Christ, and individually members of one another." (Romans 12:4-5, NKJV)',
        'Productive': 'you adhere to Biblical models of success, achieve results, strive for excellence, and display initiative, working wholeheartedly as for the Lord. "And whatever you do, do it heartily, as to the Lord and not to men." (Colossians 3:23, NKJV)',
        'Relational': 'you encourage and appreciate others, model warmth and responsiveness, and foster community, building up the body of Christ. "Therefore comfort each other and edify one another, just as you also are doing." (1 Thessalonians 5:11, NKJV)',
        'Strategic': 'you demonstrate local and global awareness, explore options and make wise decisions, and evaluate effectiveness, planning carefully with God\'s wisdom. "For which of you, intending to build a tower, does not sit down first and count the cost, whether he has enough to finish it." (Luke 14:28, NKJV)'
    };
    return descriptions[skill];
}