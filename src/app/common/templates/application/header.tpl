/*
* @template : application/header
*/

<!--     {{log this}}
    {{log controller}}
    {{log view}}
    {{log model}}
    {{log papa}}
    {{log this.papa}}
 -->

  <header id="header" role="banner">
      <h1>
        <a href="./">LxxL</a>
      </h1>
  </header>

  <p id="search">
    <input type="text" placeholder="Search..."/><button type="submit" class="tip-right" title="Search"><i class="icon-search icon-white"></i></button>
  </p>

  <nav id="user-nav" class="navbar" role="navigation">
    <!-- Logged-out, default -->
    <ul class="nav btn-group user-logged-out">
      <li class="btn btn-inverse" ><a title="login" {{action showLogin href=true}}><i class="icon icon-lock"></i><span class="text">Log-in</span></a></li>
      <li class="btn btn-mini btn-inverse"><a title=""  {{action showRegister href=true}}><i class="icon icon-user"></i> <span class="text">Register</span></a></li>
    </ul>

    <!-- Logged-in -->
    <ul class="nav btn-group user-logged-in">
      <li class="btn btn-inverse" ><a title="profile"  {{action showProfile href=true}}><i class="icon icon-user"></i><span class="text">Profile</span></a></li>
      <li class="btn btn-mini btn-inverse"><a title="settings"  {{action showSettings href=true}}><i class="icon icon-cog"></i> <span class="text">Settings</span></a></li>
      <li class="btn btn-mini btn-inverse"><a title="logout" href="#callcontrollerlogout"><i class="icon icon-off"></i> <span class="text">Logout</span></a></li>
    </ul>

    <!-- Messaging -->
    <!--
    <li class="btn btn-inverse dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle"><i class="icon icon-envelope"></i> <span class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>
        <ul class="dropdown-menu">
            <li><a class="sAdd" title="" href="#">new message</a></li>
            <li><a class="sInbox" title="" href="#">inbox</a></li>
            <li><a class="sOutbox" title="" href="#">outbox</a></li>
            <li><a class="sTrash" title="" href="#">trash</a></li>
        </ul>
    </li>
    -->

  </nav>

  <nav id="sidebar">
    <a class="visible-phone" {{action showDashboard href=true}}><i class="icon icon-home"></i>Home</a>
    <a class="visible-phone" {{action showSandbox href=true}}><i class="icon icon-eye-open"></i> <span>Explore sandbox</span></a></li>
    <ul>
      {{#view view.navItemView item="dashboard" class="user-all" }}
        <a {{action showDashboard href=true}}><i class="icon icon-home"></i> <span>Home</span></a>
      {{/view}}
      {{#view view.navItemView item="sandbox" class="user-all" }}
        <a {{action showSandbox href=true}}><i class="icon icon-eye-open"></i> <span>Explore sandbox</span></a>
      {{/view}}

      {{#view view.navItemView item="my-qtis" class="submenu user-author" }}
        <a {{action showMyQTIs href=true}}><i class="icon icon-th-list"></i> <span>My QTIs</span></a>
        <ul>
          <li><a {{action showMyQTIs href=true}}>List</a></li>
          <li><a {{action showNewQTI href=true}}>New</a></li>
        </ul>
      {{/view}}

      {{#view view.navItemView item="all-qtis" class="user-reviewer" }}
        <a {{action showAllQTIs href=true}}><i class="icon icon-bullhorn"></i> <span>All QTIs</span></a>
      {{/view}}

      {{#view view.navItemView item="categories" class="submenu user-admin" }}
        <a {{action showAllCategories href=true}}><i class="icon icon-bookmark"></i> <span>Categories</span></a>
        <ul>
          <li><a {{action showAllCategories href=true}}>List</a></li>
          <li><a {{action showNewCategory href=true}}>New</a></li>
        </ul>
      {{/view}}

      {{#view view.navItemView item="users" class="user-admin" }}
        <a {{action showAllUsers href=true}}><i class="icon icon-user"></i> <span>Users</span></a>
      {{/view}}
    </ul>
  </nav>
