$(document).bind('ext:load', function () {
  $(".commit-ref").each(function () {
    branch_block = $(this).find("a:first")

    branch_name = branch_block.find("span:last").text();

    branch_url = branch_block.attr('href');
    repo_url = branch_url.match(/(?:\/[^\/]+){2}/)[0]

    params = $.param({'q':`is:pr is:open base:${branch_name}`})
    href = `${repo_url}/pulls?${params}`

    $(this).after(` (<a href="${href}">PRs</a>)`)
  });
});