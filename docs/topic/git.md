```bash
# 拉取远程分支创建本地分支并切换
git checkout -b <localBranch> origin/<remoteBranch>
# 推送本地分支到远程分支
git push origin <localBranch>:<remoteBranch>
# 删除本地分支
git branch -d <localBranch>
# 删除远程分支
git push origin :<remoteBranch>
# 设置仓库远程地址
git remote set-url origin https://<token>@github.com/<username>/<repo>.git
git remote add origin https://<token>@github.com/<username>/<repo>.git
# 合并代码
git pull --rebase
# 全局配置 `git config --global pull.rebase true` 不使用rebase策略 `git pull --no-rebase`
# 解决冲突 -> 1. resolve conflict 2. `git add .` 3. `git rebase --continue` 4. `git push`
# 放弃本次rebase操作 -> `git rebase --abort`
# 本地如果有未提交 在执行前可以 `git stash` 合并提交之后再 `git stash pop`
git merge --squash <branch>
```