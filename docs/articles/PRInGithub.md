### github 提交 pr (pull request)

```bash
# fork
# clone

# git remote add 上游仓库别名 上游仓库地址 (为了提交前检查是否是最新代码)
git remote add upstream https://github.com/<username>/<repo_name>.git
# 确保无法 push 到上游仓库
git remote set-url --push upstream no_push
# 再次查看本地相关联的远程仓库
git remote -v

# ...一顿修改

git add .
# 例如 #120 会将此次提交关联到对应的 issue
git commit -m '#issue <action>: <msg>'
# git fetch 上游仓库别名
git fetch upstream
# git merge 上游仓库别名/分支名
git merge upstream/<branch_name>
# push
git push origin <my_branch_name>:<my_branch_name>

# github 提交 pull request
```
