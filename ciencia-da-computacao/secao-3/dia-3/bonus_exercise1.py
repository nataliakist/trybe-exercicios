from linked_list_content import LinkedList

def delete_duplicates(linked_list):
    new_list = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if new_list.index_of(current_node.value) == -1:
            new_list.insert_last(current_node.value)

    return new_list

linked_list = LinkedList()
linked_list.insert_first(1)
linked_list.insert_last(3)
linked_list.insert_at(2, 1)
linked_list.insert_first(1)
linked_list.insert_last(3)
print(linked_list)
print(delete_duplicates(linked_list))