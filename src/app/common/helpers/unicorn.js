(function() {
  this.unicorn = new (function() {
    // Toggle active state on one menu item
    this.makeMenuItemActive = function(node) {
      var parentLi = node.parents('li');
      var allSubmenus = $('#sidebar li.submenu ul');

      var currentSubmenu = node.siblings('ul');
      var otherLis = $('#sidebar li');

      if (parentLi.hasClass('open') || parentLi.hasClass('active'))
        return;

      if (($(window).width() > 768) || ($(window).width() < 479)) {
        allSubmenus.slideUp();
        currentSubmenu.slideDown();
      } else {
        allSubmenus.fadeOut(250);
        currentSubmenu.fadeIn(250);
      }
      otherLis.removeClass('open');
      otherLis.removeClass('active');
      if (parentLi.hasClass('submenu')) {
        parentLi.addClass('open');
        node.siblings('ul > li:first-child').addClass('active');
      }
      parentLi.addClass('active');
    };

    this.bindBehaviors = function(node) {
      // Chosen stuff
      // $('select.chzn-select').chosen();
      $(':not(.data-table) select').chosen();

      // Tips
      $('.tip', node).tooltip();
      $('.tip-left', node).tooltip({ placement: 'left' });
      $('.tip-right', node).tooltip({ placement: 'right' });
      $('.tip-top', node).tooltip({ placement: 'top' });
      $('.tip-bottom', node).tooltip({ placement: 'bottom' });

      // $('[class*="tip-"]', node).each(function(ind, item){
      //   console.warn(item);
      //   if($(item).hasClass('tipbound'))
      //     return;
      //   $(item).addClass('tipbound');
      //   var p = (item.className.match(/tip-(left)/) ||
      //     item.className.match(/tip-(right)/) ||
      //     item.className.match(/tip-(bottom)/) ||
      //     item.className.match(/tip-(top)/)).pop();
      //   console.warn(p);
      //   $(item).tooltip({placement: p});
      // });

      $('input[type=checkbox],input[type=radio]').uniform();

      $('.icon-print').each(function(ind, item) {
        var p = $(item).parent();
        if (p.hasClass('will-print'))
          return;
        p.addClass('will-print');
        p.click(function(e) {
          print();
        });
      });

      $('.data-table').each(function(ind, item) {
        if ($(item).hasClass('dataTable'))
          return;
        $(item).dataTable({
          'oLanguage': LxxlLib.Locale.getData('tables'),
          'bJQueryUI': true,
          'sPaginationType': 'full_numbers',
          'sDom': '<""l>t<"F"fp>'
        });


        $('span.icon input:checkbox, th input:checkbox').click(function() {
          var checkedStatus = this.checked;
          var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');
          checkbox.each(function() {
            this.checked = checkedStatus;
            if (checkedStatus == this.checked) {
              $(this).closest('.checker > span').removeClass('checked');
            }
            if (this.checked) {
              $(this).closest('.checker > span').addClass('checked');
            }
          });
        });
        $('select').chosen();
      });
    };
  })();

  $(document).ready(function() {

    // === Sidebar navigation === //

    // Sidebar mobile
    $(document).delegate('#sidebar > a', 'click', function(e)
        {
          e.preventDefault();
          var ul = $('#sidebar > ul');
          var sidebar = $('#sidebar');
          if (sidebar.hasClass('open'))
          {
            sidebar.removeClass('open');
            ul.slideUp(250);
          } else {
            sidebar.addClass('open');
            ul.slideDown(250);
          }
        });

    // === Search input typeahead === //
    // XXX rebind search
    // $('#search input[type=text]').typeahead({
    //  source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons',
    //  'Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs',
    //  'Widgets'],
    //  items: 4
    // });

    (function() {
      var hide = function() {
        $(this).removeClass('slidify-on');
      };

      var show = function() {
        $(this).addClass('slidify-on');
      };

      $('body').on('click.slidify.data-api', '[data-toggle=slidify]', function(e) {
        var dataParent = $(this).attr('data-parent');
        var speed = parseInt($(this).attr('data-speed')) || 500;
        var nodeTarget = $($(this).attr('data-target'));

        if (nodeTarget.hasClass('slidify-on')) {
          nodeTarget.slideUp(speed, hide);
        } else {
          if (dataParent)
            $(dataParent).find('.slidify-on').slideUp(speed, hide);
          nodeTarget.slideDown(speed, show);
        }
      });
    })();
  });


}).apply(this);
