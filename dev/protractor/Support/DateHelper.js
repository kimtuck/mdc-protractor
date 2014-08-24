DateHelper = {
    mmmToString: function(date) {
        return ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
            ("00" + date.getDate()).slice(-2) + "/" +
            date.getFullYear()
    },

    Today: function() {
        return this.mmmToString(new Date());
    },
    Tomorrow: function() {
        var dt = new Date();
        dt.setDate(dt.getDate() + 1);
        return this.mmmToString(dt);
    },
    BeforeToday: function(daysBefore) {
        var dt = new Date();
        dt.setDate(dt.getDate() - daysBefore);
        return this.mmmToString(dt);
    }
};
