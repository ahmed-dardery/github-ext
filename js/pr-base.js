$(document).bind('ext:load', function () {
  $(".commit-ref").each(function () {
    branch_block = $(this).find(":first-child")

    branch_name = branch_block.find("span:last").text();

    function getRepoUrl(branch_block){
      branch_url = branch_block.attr('href');
      if(!branch_url)
        branch_url = window.location.pathname;
      matches = branch_url.match(/(?:\/[^\/]+){2}/);
      return matches[0];
    }

    repo_url = getRepoUrl(branch_block);

    params = $.param({ 'q': `is:pr is:open base:${branch_name}` });
    href = `${repo_url}/pulls?${params}`;

    $(this).after(` (<a href="${href}">PRs</a>)`);
  });
});