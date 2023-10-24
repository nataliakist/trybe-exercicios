from doubly_linked_list import DoublyLinkedList
from doubly_node import DoublyNode

def delete_duplicates(doubly_linked_list):
    new_node = DoublyNode(doubly_linked_list.head.value)
    new_node.next = doubly_linked_list.head.next
    prev = new_node
    cur = doubly_linked_list.head.next
    new_list = DoublyLinkedList() 

    while cur.next:
        if cur.next.value == cur.value:
            while cur.next and cur.next.value == cur.value:
                cur = cur.next
            cur.next, cur = None, cur.next
            prev.next = cur
            
        else:
            prev = cur
            cur = cur.next
            new_list._length += 1

    

    new_list.head.next = new_node.next
    return new_list

doubly_linked_list = DoublyLinkedList()
doubly_linked_list.insert_first(1)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_at(2, 1)
doubly_linked_list.insert_first(1)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_last(4)
# doubly_linked_list.insert_last(4)
doubly_linked_list.insert_last(5)
print(doubly_linked_list)
print(delete_duplicates(doubly_linked_list))