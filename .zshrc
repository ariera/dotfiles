# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="robbyrussell"

# Set to this to use case-sensitive completion
# CASE_SENSITIVE="true"

# Comment this out to disable weekly auto-update checks
# DISABLE_AUTO_UPDATE="true"

# Uncomment following line if you want to disable colors in ls
# DISABLE_LS_COLORS="true"

# Uncomment following line if you want to disable autosetting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment following line if you want red dots to be displayed while waiting for completion
# COMPLETION_WAITING_DOTS="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Example format: plugins=(rails git textmate ruby lighthouse)
plugins=(git brew ruby)

source $ZSH/oh-my-zsh.sh

# Customize to your needs...
export PATH=/Users/ariera/.rvm/gems/ruby-1.9.2-p290/bin:/Users/ariera/.rvm/gems/ruby-1.9.2-p290@global/bin:/Users/ariera/.rvm/rubies/ruby-1.9.2-p290/bin:/Users/ariera/.rvm/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin

[[ -s "/Users/ariera/.rvm/scripts/rvm" ]] && source "/Users/ariera/.rvm/scripts/rvm"
rvm use 1.9.2
