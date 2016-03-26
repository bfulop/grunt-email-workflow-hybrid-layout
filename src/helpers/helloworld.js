module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('foo', function (str)  {
        var textresult = str + "\n\n\n";
            for (var aprop in options) {
            textresult += "\n\n" + aprop + " = " + options[aprop];
        }
        return new Handlebars.SafeString(

            '<div class="mybold">' +
                textresult
            + '</div>');
    });

    Handlebars.registerHelper('wrapper', function(str){
        return new Handlebars.SafeString(
            `<p> ${str.fn(this)} </p>`
        );
    });

    Handlebars.registerHelper('center-wrapper', function(str){
        return new Handlebars.SafeString(
            `<center class="wrapper">
    <div class="webkit">
        <!--[if (gte mso 9)|(IE)]>
        <table width="{{ parameters.pagewidth }}" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
        <![endif]-->
        <table width="{{ parameters.pagewidth }}" class="outer" align="center" cellpadding="0" cellspacing="0">

            ${str.fn(this)}

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </div>
</center>`
        );
    });
};