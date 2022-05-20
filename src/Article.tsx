import { Link, useParams } from 'react-router-dom';

export default function Article() {
  const { id: articleId } = useParams();
  return (
    <>
      <article>
        <Link to='/' className='back-home'>
          ⟵ Hsu Yeung 的个人博客
        </Link>

        <div className='post-title-container'>
          <h1 className='post-title'>我的命令行开发环境 ❤️</h1>
        </div>

        <div className='post-meta'>
          <span className='post-date post-meta-item'>2022 年 2 月 21 日</span>

          <span className='dot-divider'>·</span>

          <span className='post-categories post-meta-item'>
            <span className='post-category'>
              <a className='nav' href='/posts/by_category#编程'>
                编程
              </a>
            </span>
          </span>

          <span className='dot-divider'>·</span>

          <span className='site-home post-meta-item'>
            <a className='back-home-title' href='/'>
              春水煎茶
            </a>
          </span>
        </div>
        <div className='post-body'>
          <p>常言道，工欲善其事、必先利其器，熟练一套高效且趁手的工具，对开发工作的重要性不言而喻。</p>

          <p>
            <span className='marked'>本文分享我的命令行开发环境，文章较长，配图较多</span>，
            其中几处详细内容，已将其折叠起来，读者可视兴趣展开阅读。
          </p>

          <p>命令行工具非常多，称得上神器的，提炼为以下四个：</p>

          <ul>
            <li>
              <a href='#终端程序--alacritty'>终端程序 - Alacritty</a>
            </li>
            <li>
              <a href='#shell--fish'>Shell - Fish</a>
            </li>
            <li>
              <a href='#终端复用--tmux'>终端复用 — Tmux</a>
            </li>
            <li>
              <a href='#编辑器--vim'>编辑器 — Vim</a>
            </li>
          </ul>

          <p>
            我选择工具的标准是：<span className='marked'>美、快、爽</span>。
          </p>
          <h4 id='终端程序--alacritty'>
            <span className='heading-text'>
              终端程序 — Alacritty{' '}
              <a href='#终端程序--alacritty' className='heading-anchor'>
                ¶
              </a>
            </span>
          </h4>

          <p>
            <a href='https://github.com/alacritty/alacritty' target='_blank'>
              Alacritty
            </a>{' '}
            是一款 rust 编写的、 启用 GPU 加速的终端模拟器。
          </p>

          <p>天下武功，唯快不破，它唯一特点就是：快。</p>

          <p>
            作为终端，一定要颜值在线。 Alacritty 也支持配色，可参考{' '}
            <a href='https://github.com/eendroroy/alacritty-theme' target='_blank'>
              alacritty-theme
            </a>{' '}
            ， 我用的配色是{' '}
            <a href='https://github.com/alebelcor/alacritty-snazzy' target='_blank'>
              snazzy
            </a>{' '}
            ，从未换过。 此外，选择一款 <span className='marked'>等宽的</span>{' '}
            字体，对终端的整体颜值至关重要，我一直在用的字体是 InconsolataLGC Nerd Font。
          </p>

          <p>
            我对 alacritty 的功能需求非常少，只要它够快，够漂亮 就好。比如说，我是没有用终端 Tab 页的习惯的， 这些事情{' '}
            <a href='#终端复用--tmux'>tmux</a> 完全可以搞定。作为终端模拟器，简单快速就好！
          </p>

          <h4 id='shell--fish'>
            <span className='heading-text'>
              Shell – Fish{' '}
              <a href='#shell--fish' className='heading-anchor'>
                ¶
              </a>
            </span>
          </h4>

          <p>
            无独有偶，选择{' '}
            <a href='https://fishshell.com/' target='_blank'>
              fish shell
            </a>{' '}
            的原因，仍然是它更快，同时也更轻。
          </p>

          <p>
            这里所说的「快」，是指 shell 的 <span className='marked'>prompt 加载快</span>， 如下图中，进入 fish
            几乎是没有延迟的：
          </p>

          <p>
            当然，不带任何配置的 zsh 和 bash 也很快。 但是，为了酷炫的颜值、快捷的功能， 许多 zsh 用户都会搭配类似{' '}
            <a href='https://ohmyz.sh' target='_blank'>
              oh-my-zsh
            </a>{' '}
            的东西， 或者是搞一大堆配置，这都会让 shell 变慢。
          </p>

          <p>
            但是真正的不同在于，<span className='marked'>fish 是开箱即用的</span>，大可不必自己折腾那么多。 比如 fish
            的一大特色是自带补全暗示功能:
          </p>

          <p>还有自带的 ManPage 补全功能等等，这一切都无需插件。</p>

          <p>因此 fish 的插件要相对少得多。我在用的也很少:</p>

          <ul>
            <li>
              <a href='https://github.com/pure-fish/pure' target='_blank'>
                pure-fish/pure
              </a>{' '}
              从未换过的 fish prompt 主题，它是如此简洁。
            </li>
            <li>
              <p>
                <a href='https://github.com/jethrokuan/z' target='_blank'>
                  jethrokuan/z
                </a>{' '}
                快速跳转目录的插件
              </p>
            </li>
          </ul>

          <p>
            除去工具本身外，unix 中{' '}
            <a href='https://tiswww.cwru.edu/php/chet/readline/rluserman.html' target='_blank'>
              emacs 风格的 shell 快捷键
            </a>{' '}
            也值得推荐， 它们在常见的 shell (fish, zsh, bash) 中都是通用的，其中部分快捷键甚至可以在网页文本框中使用。
          </p>

          <summary>Emacs 风格的 shell 快捷键 - 光标移动和编辑</summary>

          <ul>
            <li>
              <code className='language-plaintext highlighter-rouge'>C-a</code> 光标回到行首,{' '}
              <code className='language-plaintext highlighter-rouge'>C-e</code> 光标回到行尾
            </li>
            <li>
              <code className='language-plaintext highlighter-rouge'>C-f</code> 光标向前移动一个字符，
              <code className='language-plaintext highlighter-rouge'>C-b</code> 光标向后移动一个字符
            </li>
            <li>
              <code className='language-plaintext highlighter-rouge'>Alt-f</code> 光标向前移动一个单词,{' '}
              <code className='language-plaintext highlighter-rouge'>Alt-b</code> 光标向后移动一个单词
            </li>
            <li>
              <code className='language-plaintext highlighter-rouge'>C-k</code> 清掉光标后面的部分,{' '}
              <code className='language-plaintext highlighter-rouge'>C-d</code> 删掉光标后的一个字符 或 退出
            </li>
            <li>
              <code className='language-plaintext highlighter-rouge'>C-l</code> 相当于{' '}
              <code className='language-plaintext highlighter-rouge'>clear</code> 命令，清屏
            </li>
          </ul>
          <p>（完）</p>
        </div>
      </article>
      <div className='post-sign'>
        <div className='signature'>
          <span className='author'>王超</span> ·<span className='post-date'>2022 年 2 月</span>
        </div>

        <div className='copyright'>
          <a href='/about#copyright'>原创文章，未经允许，不得转载</a>
        </div>
      </div>
    </>
  );
}
