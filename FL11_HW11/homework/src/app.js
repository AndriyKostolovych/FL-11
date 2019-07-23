let rootNode = document.getElementById("root");
const _ = document;

const addActionButton = document.getElementById('add_action');
const actionListWrapper = document.getElementById('action_list_wrapper');
const actionInput = document.getElementById('action_input');
const maxLabel = document.getElementById('max_label');

let actionList = document.getElementById('action_list');

addActionButton.setAttribute('disabled', '');

class Action {
  constructor(text) {
    this.text = text
    this.checked = false;
  }

  editText(value) {
    this.text = value;
  }

  getName() {
    return this.text;
  }

  isChecked() {
    return this.checked;
  }

  check() {
    this.checked = true;
  }
}

const actions = [
  new Action('Some action 1'),
  new Action('Find a cat'),
  new Action('Prepare cat\'s carry'),
  new Action('Bathe a cat')
]

addActionButton.addEventListener('click', function() {
  const text = actionInput.value;
  const newAction = new Action(text);
  actions.push(newAction);
  if (actions.length === 10) {
    addActionButton.setAttribute('disabled', '');
    maxLabel.classList.remove('hide');
  }
  renderList();
});

actionInput.addEventListener('input', function() {
  if (actionInput.value) {
    addActionButton.removeAttribute('disabled');
  } else {
    addActionButton.setAttribute('disabled', '');
  }
})

function renderList() {
  let listNode = _.createElement('ul');
  listNode.classList.add('add_action');

  actions.forEach(function(e, index) {
    let listItem = _.createElement('li');
    listItem.classList.add('list-item');

    let saveButton = _.createElement('button');
    saveButton.innerHTML = '<i class="material-icons">save</i>';
    saveButton.classList.add('save-button');
    saveButton.addEventListener('click', function() {
      actions[index].editText(itemEditField.value);
      renderList();
    })

    let itemEditField = _.createElement('input');
    itemEditField.setAttribute('type', 'text');

    let editItemButton = _.createElement('button');
    editItemButton.innerHTML = '<i class="material-icons">edit</i>';
    editItemButton.classList.add('edit-button');
    editItemButton.addEventListener('click', function() {
      listItem.classList.add('editable');
      itemEditField.value = e.text;
    })

    let deleteItemButton = _.createElement('button');
    deleteItemButton.innerHTML = '<i class="material-icons">delete</i>';
    deleteItemButton.classList.add('delete-button');
    deleteItemButton.addEventListener('click', function() {
      actions.splice(index, 1);

      if (actions.length < 10) {
        addActionButton.removeAttribute('disabled');
        maxLabel.classList.add('hide');
      }
      renderList()
    });

    let itemLabel = _.createElement('span');

    let itemStatus = _.createElement('input');
    itemStatus.setAttribute('type', 'checkbox');
    itemStatus.checked = e.isChecked();
    itemStatus.classList.add('status-button');
    itemStatus.addEventListener('change', function() {
      actions[index].check();
      renderList();
    });

    itemLabel.innerHTML = e.getName();

    listItem.appendChild(itemStatus);
    listItem.appendChild(itemLabel);
    listItem.appendChild(itemEditField);
    listItem.appendChild(saveButton);
    listItem.appendChild(editItemButton);
    listItem.appendChild(deleteItemButton);

    listNode.appendChild(listItem);
  })

  actionListWrapper.replaceChild(listNode, actionList);
  actionList = listNode;
}

renderList()