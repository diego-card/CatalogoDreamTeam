export const correctFlag = (country, bandeiras) => {
    function normalizeString(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    const flagObj = bandeiras.find((flagObj) => {
        return normalizeString(flagObj.translations.por.common) === country
    })
    return flagObj ? flagObj.flags.png : null
}

export const correctLogo = (team, TeamList) => {
    const url = (code) => `https://api.pcloud.com/getpubthumb?code=${code}&size=300x300`

    const theTeam = TeamList.find((theTeam) => {
        return theTeam.team == team
    })
    return theTeam ? url(theTeam.code) : null
}

export const progressBarClass = (value) => {
    if (value >= 90) return 'is-primary';
    if (value >= 70) return 'is-success';
    if (value >= 50) return 'is-warning';
    return 'is-danger';
}

export const textClass = (value) => {
    if (value >= 90) return 'has-text-primary';
    if (value >= 70) return 'has-text-success';
    if (value >= 50) return 'has-text-warning';
    return 'has-text-danger';
}