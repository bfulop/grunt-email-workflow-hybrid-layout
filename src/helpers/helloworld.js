module.exports.register = function (Handlebars, options)  {

    Handlebars.registerHelper('calcwidth-left', function (blocks_number)  {
        return blocks_number * 95 + (blocks_number - 1) * 6;
    });

    Handlebars.registerHelper('calcwidth-right', function (blocks_number)  {
        return (6 - blocks_number) * 95 + (5 - blocks_number) * 6;
    });
    
    Handlebars.registerHelper('lookupdeep', function ()  {

        var baseobj = Array.prototype.shift.call(arguments);
        Array.prototype.pop.call(arguments);
        var pathname = Array.prototype.slice.call(arguments).join('');
        var path_array = pathname.split('.');
        var currentobj = baseobj;
        path_array.forEach(function(element, index, array){
            currentobj = currentobj[element];
        },currentobj);

        return currentobj;
    });


    
    
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